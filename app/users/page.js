//s
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For redirection

export default function Page() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loading, setLoading] = useState(true); // State to handle loading
  const router = useRouter(); // Hook for navigation

  useEffect(() => {
    async function checkAuthentication() {
      // Check login status by looking for token in local storage
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
        setLoading(false);
      } else {
        setIsLoggedIn(false);
        setLoading(false);
        router.push('/signup'); // Redirect to signup page if not authenticated
      }
    }

    checkAuthentication();
  }, [router]);

  useEffect(() => {
    if (!isLoggedIn) return; // Exit if not logged in

    async function getUsers() {
      try {
        const res = await fetch('https://backend-ivory-omega.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://backend-ivory-omega.vercel.app/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (loading) return <p>Loading...</p>; // Show loading state while checking authentication

  if (!isLoggedIn) return null; // Optionally return null or redirect if not logged in

  return (
    <>
      <br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className='col-md-2 text-center'>#</th>
                    <th className='col-md-4'>Firstname</th>
                    <th className='col-md-4'>Lastname</th>
                    <th className='col-md-1'>Edit</th>
                    <th className='col-md-1'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className='text-center'>{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td><Link href={`/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td><button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-trash"></i>Del</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}
