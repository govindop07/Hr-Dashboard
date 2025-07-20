'use client';
import { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';
import SearchFilter from '@/components/SearchFilter';
import { enrichUser } from '@/lib/mockData';

export default function DashboardHome() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

useEffect(() => {
  fetch('https://dummyjson.com/users?limit=20')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched users:', data.users); 
      const enriched = data.users.map(enrichUser);
      setUsers(enriched);
      setFilteredUsers(enriched);
    });
}, []);


  return (
    <main className="p-4">
      <SearchFilter users={users} onUpdate={setFilteredUsers} />
      <div className="grid md:grid-cols-3 gap-4">
        {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    </main>
  );
}
