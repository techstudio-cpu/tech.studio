'use client';

import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [editingService, setEditingService] = useState<any>(null);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price: parseFloat(price), description, features: features.split(',') }),
    });
    if (res.ok) {
      const newService = await res.json();
      setServices([...services, newService]);
      setName('');
      setPrice('');
      setDescription('');
      setFeatures('');
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    const res = await fetch(`/api/services/${editingService.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editingService, features: editingService.features.split(',') }),
    });

    if (res.ok) {
      const updatedService = await res.json();
      setServices(services.map((s: any) => (s.id === updatedService.id ? updatedService : s)));
      setEditingService(null);
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setServices(services.filter((service: any) => service.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Services</h1>

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
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded md:col-span-2"
          />
          <input
            type="text"
            placeholder="Features (comma-separated)"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="border p-2 rounded md:col-span-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Add Service
        </button>
      </form>

      {editingService && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Service</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={editingService.name}
                  onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={editingService.price}
                  onChange={(e) => setEditingService({ ...editingService, price: parseFloat(e.target.value) })}
                  className="border p-2 rounded"
                />
                <textarea
                  placeholder="Description"
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="border p-2 rounded md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Features (comma-separated)"
                  value={Array.isArray(editingService.features) ? editingService.features.join(',') : editingService.features}
                  onChange={(e) => setEditingService({ ...editingService, features: e.target.value })}
                  className="border p-2 rounded md:col-span-2"
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  Update
                </button>
                <button type="button" onClick={() => setEditingService(null)} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service: any) => (
          <div key={service.id} className="border p-4 rounded-lg flex flex-col">
            <div className="flex-grow">
                <h2 className="text-xl font-bold">{service.name}</h2>
                <p className="text-gray-500">${service.price}</p>
                <p>{service.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setEditingService(service)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service.id)}
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
