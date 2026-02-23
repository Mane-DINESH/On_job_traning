import React, { useState } from "react";

import '../css/Offers.css'
import Sidebar from "./Sidebar";
const initialOffers = [
  {
    id: 1,
    title: "New Year Offer",
    code: "NY2026",
    discount: "20%",
    expiry: "2026-01-10",
    status: true,
  },
  {
    id: 2,
    title: "React Course Offer",
    code: "REACT50",
    discount: "50%",
    expiry: "2026-02-15",
    status: false,
  },
];

export default function AdminOfferPage() {
  const [offers, setOffers] = useState(initialOffers);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editOffer, setEditOffer] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    code: "",
    discount: "",
    expiry: "",
  });

  const filteredOffers = offers.filter((offer) =>
    offer.title.toLowerCase().includes(search.toLowerCase()) ||
    offer.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = () => {
    if (!formData.title || !formData.code || !formData.discount || !formData.expiry) return;

    if (editOffer) {
      setOffers(offers.map(o =>
        o.id === editOffer.id ? { ...o, ...formData } : o
      ));
    } else {
      setOffers([
        ...offers,
        { id: Date.now(), ...formData, status: true },
      ]);
    }

    setFormData({ title: "", code: "", discount: "", expiry: "" });
    setShowModal(false);
    setEditOffer(null);
  };

  const handleEdit = (offer) => {
    setEditOffer(offer);
    setFormData(offer);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setOffers(offers.filter(o => o.id !== id));
  };

  const toggleStatus = (id) => {
    setOffers(offers.map(o =>
      o.id === id ? { ...o, status: !o.status } : o
    ));
  };

  return (
    <>
    <Sidebar/>
    <div className="admin-offers">
      <div className="header">
        <h2>Offer Management</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Offer
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by title or code..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Code</th>
            <th>Discount</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredOffers.map((offer, index) => (
            <tr key={offer.id}>
              <td>{index + 1}</td>
              <td>{offer.title}</td>
              <td>{offer.code}</td>
              <td>{offer.discount}</td>
              <td>{offer.expiry}</td>

              <td>
                <button
                  className={`status ${offer.status ? "active" : "inactive"}`}
                  onClick={() => toggleStatus(offer.id)}
                >
                  {offer.status ? "Active" : "Inactive"}
                </button>
              </td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(offer)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(offer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredOffers.length === 0 && (
            <tr>
              <td colSpan="7" className="no-data">No offers found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editOffer ? "Edit Offer" : "Add Offer"}</h3>

            <input
              type="text"
              placeholder="Offer title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <input
              type="text"
              placeholder="Coupon code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            />

            <input
              type="text"
              placeholder="Discount (e.g. 20%)"
              value={formData.discount}
              onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
            />

            <input
              type="date"
              value={formData.expiry}
              onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
            />

            <div className="modal-actions">
              <button onClick={handleSubmit} className="save-btn">
                {editOffer ? "Update" : "Save"}
              </button>
              <button onClick={() => setShowModal(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}