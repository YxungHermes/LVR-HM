"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Lead {
  id: string;
  created_at: string;
  partner1_name: string;
  partner2_name: string;
  email: string;
  phone: string | null;
  wedding_date: string | null;
  event_type: string;
  status: 'new' | 'contacted' | 'proposal_sent' | 'booked' | 'declined' | 'archived';
  priority: 'low' | 'medium' | 'high';
  estimated_value: number | null;
  budget_range: string | null;
  location: string | null;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, priorityFilter, searchQuery]);

  const fetchLeads = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (statusFilter !== 'all') params.append('status', statusFilter);
    if (priorityFilter !== 'all') params.append('priority', priorityFilter);
    if (searchQuery) params.append('search', searchQuery);

    const response = await fetch(`/api/leads?${params.toString()}`);
    const data = await response.json();
    setLeads(data.leads || []);
    setLoading(false);
  };

  const getStatusBadgeColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      proposal_sent: 'bg-purple-100 text-purple-800',
      booked: 'bg-green-100 text-green-800',
      declined: 'bg-red-100 text-red-800',
      archived: 'bg-gray-100 text-gray-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadgeColor = (priority: string) => {
    const colors: Record<string, string> = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    booked: leads.filter(l => l.status === 'booked').length,
    totalValue: leads.reduce((sum, l) => sum + (l.estimated_value || 0), 0),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Management Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">Manage consultation requests and track your pipeline</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Total Leads</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">New</p>
            <p className="mt-2 text-3xl font-semibold text-blue-600">{stats.new}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Contacted</p>
            <p className="mt-2 text-3xl font-semibold text-yellow-600">{stats.contacted}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Booked</p>
            <p className="mt-2 text-3xl font-semibold text-green-600">{stats.booked}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600">Pipeline Value</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              ${(stats.totalValue / 1000).toFixed(1)}k
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-wax-red focus:border-rose-wax-red"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="proposal_sent">Proposal Sent</option>
                <option value="booked">Booked</option>
                <option value="declined">Declined</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-wax-red focus:border-rose-wax-red"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-wax-red focus:border-rose-wax-red"
              />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Couple
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    Loading leads...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    No leads found
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {lead.partner1_name} & {lead.partner2_name}
                      </div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{lead.event_type}</div>
                      {lead.location && (
                        <div className="text-sm text-gray-500">{lead.location}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.wedding_date ? new Date(lead.wedding_date).toLocaleDateString() : 'TBD'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(lead.status)}`}>
                        {lead.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeColor(lead.priority)}`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${lead.estimated_value?.toLocaleString() || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="text-rose-wax-red hover:text-rose-wax-red/80"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
