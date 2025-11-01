# Deployment (VS Code → ServerByt)

This document sets up automatic deploy from VS Code to your ServerByt instance (techstudio.co.in). It configures an SFTP connection that uses an SSH key pair.

Summary of what I added for you
- `.vscode/sftp.json` — SFTP config pre-filled with ServerByt IP (replace username and remotePath as needed).
- `.gitignore` updated to exclude the private key and SFTP config.

What I need from you or what I'll do next
1. I can generate an SSH key pair in the project for you. After generation you must add the public key (content of `.vscode/deploy_key.pub`) to your ServerByt account (control panel) or to the server user's `~/.ssh/authorized_keys`.
2. Provide the SSH username for your ServerByt account (I can't infer it from the control panel). Once you provide it I will update `sftp.json` with the username and correct `remotePath`.

How to generate the key (PowerShell - run from project root)
```powershell
# create .vscode folder if it doesn't exist
if (-not (Test-Path -Path .vscode)) { New-Item -ItemType Directory -Path .vscode }

# generate an ed25519 key pair at .vscode/deploy_key (no passphrase)
ssh-keygen -t ed25519 -f .vscode/deploy_key -N "" -C "techstudio-deploy"

# print the public key to copy/paste
Get-Content .vscode\deploy_key.pub
```

How to add the public key to ServerByt
- If ServerByt control panel has an SSH keys section, paste the contents of `.vscode/deploy_key.pub` there and enable it for the site's user.
- Or, if you have password SSH access, log in and append the public key to `~/.ssh/authorized_keys` for the deployment user:

```powershell
# example if you have password access and the server accepts SSH sessions
ssh your-username@185.151.30.206 "mkdir -p ~/.ssh && echo 'PASTE_PUBLIC_KEY_HERE' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh"
```

Testing the connection from VS Code
1. Install the SFTP extension by liximomo (if not installed): open VS Code extensions and install `liximomo.sftp`.
2. Open the command palette (Ctrl+Shift+P) and run: `SFTP: List Remote Directory` (or any SFTP command) to test the connection. The extension will use `.vscode/sftp.json`.
3. If the connection works, set `"uploadOnSave": true` inside `.vscode/sftp.json` to enable automatic upload on save.

Optional: automatic deploy on git push (GitHub Actions)
- If your repo is hosted on GitHub and you prefer CI deploys, I can add a GitHub Actions workflow that connects via SSH and rsync/scp to deploy on push to `main`.

Notes and security
- Do NOT commit `.vscode/deploy_key` (private key). It is ignored by `.gitignore`.
- If you'd rather use a password instead of keys, I can update `sftp.json` with `password` but keys are strongly recommended.

Next steps (what I can do now)
- I can generate the SSH key pair now in your workspace and then show you the public key (so you can paste it into ServerByt). After you add it and tell me the SSH username, I'll update `sftp.json` and test the connection.

If you'd like me to proceed now, reply "Yes generate the key" and I'll create the key pair and show the public key here.

GitHub-based deploy (CI) — how this will work

I added a GitHub Actions workflow at `.github/workflows/deploy.yml` that will run on `push` to `main`. It:
- checks out the repo
- installs dependencies and runs `npm run build`
- optionally runs `npm run export` if your project performs a static export to the `out/` directory
- copies the deployment files to your ServerByt server using SCP (the workflow uses the `appleboy/scp-action`)
- optionally runs post-deploy remote commands via SSH (if you set them as a secret)

Secrets you must add to the repository (Settings → Secrets → Actions)
- `DEPLOY_HOST` — 185.151.30.206
- `DEPLOY_USER` — techstudio.co.in
- `DEPLOY_PORT` — 22 (change if ServerByt uses a different SSH port)
- `DEPLOY_PATH` — /home/techstudio.co.in/public_html (or the remote path you want files copied into)
- `DEPLOY_KEY` — the private key content (copy the contents of `.vscode/deploy_key`)
- `REMOTE_POST_DEPLOY_COMMANDS` — optional (for example: `cd /home/techstudio.co.in/public_html && npm ci && pm2 restart site`)

Important: keep the private key value secret. Do NOT paste the private key into code or commit it; use GitHub Secrets.

Quick steps to connect this repository to GitHub and enable CI-deploy
1. Create a GitHub repository (on github.com). Note the repo URL (e.g., `git@github.com:username/tech-studio.git`).
2. In your local project root run the following commands to push your code:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

3. On GitHub, go to Settings → Secrets → Actions and add the secrets listed above. For `DEPLOY_KEY`, open `.vscode\deploy_key` in a text editor and paste the full private key value.

4. Make a change and push to `main`. The workflow will run automatically and attempt to copy files to the server.

If the host blocks SSH port 22, you must either enable SSH access in the ServerByt control panel or ask ServerByt support to open or provide the correct SSH port. Once the port is open and the secrets are set, the workflow should be able to deploy.

