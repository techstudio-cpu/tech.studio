'use client';

import { useEffect, useState } from 'react';

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [editingTemplate, setEditingTemplate] = useState<any>(null);

  useEffect(() => {
    fetch('/api/templates')
      .then((res) => res.json())
      .then((data) => setTemplates(data));
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/templates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, category, imageUrl, previewUrl }),
    });
    if (res.ok) {
      const newTemplate = await res.json();
      setTemplates([...templates, newTemplate]);
      setName('');
      setCategory('');
      setImageUrl('');
      setPreviewUrl('');
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTemplate) return;

    const res = await fetch(`/api/templates/${editingTemplate.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingTemplate),
    });

    if (res.ok) {
      const updatedTemplate = await res.json();
      setTemplates(templates.map((t: any) => (t.id === updatedTemplate.id ? updatedTemplate : t)));
      setEditingTemplate(null);
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/templates/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setTemplates(templates.filter((template: any) => template.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Templates</h1>

      <form onSubmit={handleCreate} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Preview URL"
          value={previewUrl}
          onChange={(e) => setPreviewUrl(e.target.value)}
          className="border p-2 rounded"
        />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Add Template
        </button>
      </form>

      {editingTemplate && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Template</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={editingTemplate.name}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={editingTemplate.category}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, category: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={editingTemplate.imageUrl}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, imageUrl: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Preview URL"
                  value={editingTemplate.previewUrl}
                  onChange={(e) => setEditingTemplate({ ...editingTemplate, previewUrl: e.target.value })}
                  className="border p-2 rounded"
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Update
                </button>
                <button type="button" onClick={() => setEditingTemplate(null)} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template: any) => (
          <div key={template.id} className="border p-4 rounded-lg flex flex-col">
            <div className="flex-grow">
                <img src={template.imageUrl} alt={template.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-bold">{template.name}</h2>
                <p className="text-gray-500">{template.category}</p>
                <a href={template.previewUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Preview
                </a>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setEditingTemplate(template)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(template.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
