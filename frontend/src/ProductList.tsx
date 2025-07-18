import React, { useEffect, useState, useMemo } from 'react';
import './ProductList.css';

const LOGO_SVG = (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7f5cff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#23263A" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="#181A20" stroke="#7f5cff" strokeWidth="4" />
    <circle cx="50" cy="50" r="44" fill="url(#glow)" />
    <text x="50%" y="56%" textAnchor="middle" fill="#00eaff" fontSize="34" fontFamily="Orbitron, Arial, sans-serif" dy=".3em" style={{filter: 'drop-shadow(0 0 8px #7f5cff)'}}>BM</text>
  </svg>
);

type Bounty = {
  username: string;
  link: string;
  price: number;
};

type SortOrder = 'asc' | 'desc';

function BountyList() {
  const [bounties, setBounties] = useState<Bounty[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setBounties(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching bounties:", err);
        setLoading(false);
      });
  }, []);

  const filteredBounties = useMemo(() => {
    let filtered = bounties.filter(b =>
      b.username.toLowerCase().includes(search.toLowerCase()) ||
      b.link.toLowerCase().includes(search.toLowerCase())
    );
    filtered = filtered.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    return filtered;
  }, [bounties, search, sortOrder]);

  return (
    <div className="bounty-root">
      <a href="/" className="bounty-logo top-left" title="Go to Home">{LOGO_SVG}</a>
      <div className="bounty-container table-mode">
        <h1 className="bounty-title">Bounty Market</h1>
        <div className="bounty-controls">
          <input
            className="bounty-search"
            type="text"
            placeholder="Search by username or link..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className={`bounty-sort ${sortOrder === 'asc' ? 'active' : ''}`}
            onClick={() => setSortOrder('asc')}
            aria-label="Sort by price ascending"
          >
            Price ↑
          </button>
          <button
            className={`bounty-sort ${sortOrder === 'desc' ? 'active' : ''}`}
            onClick={() => setSortOrder('desc')}
            aria-label="Sort by price descending"
          >
            Price ↓
          </button>
        </div>
        {loading ? (
          <div className="bounty-loading">Loading...</div>
        ) : filteredBounties.length === 0 ? (
          <p className="bounty-empty">No bounties found.</p>
        ) : (
          <div className="bounty-table-wrapper">
            <table className="bounty-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Link</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredBounties.map((bounty, idx) => (
                  <tr key={idx}>
                    <td>{bounty.username}</td>
                    <td>
                      <a className="bounty-link" href={bounty.link} target="_blank" rel="noopener noreferrer">
                        {bounty.link}
                      </a>
                    </td>
                    <td className="bounty-price">${bounty.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BountyList;
