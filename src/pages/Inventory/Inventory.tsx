import { useState } from 'react'
import '../../App.css'
import './Inventory.css'
import { useNavigate } from 'react-router-dom'

type Hoarding = {
  id: number
  location: string
  size: string
  status: 'Available' | 'Booked' | 'Maintenance'
  monthlyRate: string
  owner: string
}

const hoardings: Hoarding[] = [
  {
    id: 1,
    location: 'MG Road Junction',
    size: '40 x 20 ft',
    status: 'Booked',
    monthlyRate: 'Rs 85,000',
    owner: 'City Ads Co.',
  },
  {
    id: 2,
    location: 'Airport Link Road',
    size: '60 x 30 ft',
    status: 'Available',
    monthlyRate: 'Rs 1,20,000',
    owner: 'Northline Media',
  },
  {
    id: 3,
    location: 'Market Circle',
    size: '30 x 15 ft',
    status: 'Maintenance',
    monthlyRate: 'Rs 52,000',
    owner: 'Prime Outdoor',
  },
]

const metrics = [
  { label: 'Total sites', value: hoardings.length.toString() },
  {
    label: 'Available',
    value: hoardings
      .filter((hoarding) => hoarding.status === 'Available')
      .length.toString(),
  },
  { label: 'Monthly value', value: 'Rs 2.57L' },
]

function Inventory() {
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="app-shell">
      {!showAddForm && (
        <>
          <header className="topbar">
            <div>
              <p className="eyebrow">Outdoor inventory</p>
              <h1>Hoardings Dashboard</h1>
            </div>

            <button
              type="button"
              className="primary-action"
              onClick={() => setShowAddForm(true)}
            >
              Add site
            </button>
            <button
              type="button"
              className="primary-action"
              onClick={() => navigate('/') }
            >
              Back to dashboard
            </button>
          </header>

          <section className="summary-grid" aria-label="Inventory summary">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </section>

          <section className="inventory-panel">
            <div className="panel-header">
              <div>
                <h2>Inventory</h2>
                <p>Track locations, rates, and availability.</p>
              </div>

              <button type="button" className="secondary-action">
                Export
              </button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Monthly rate</th>
                    <th>Owner</th>
                  </tr>
                </thead>

                <tbody>
                  {hoardings.map((hoarding) => (
                    <tr key={hoarding.id}>
                      <td>{hoarding.location}</td>
                      <td>{hoarding.size}</td>
                      <td>
                        <span
                          className={`status status-${hoarding.status.toLowerCase()}`}
                        >
                          {hoarding.status}
                        </span>
                      </td>
                      <td>{hoarding.monthlyRate}</td>
                      <td>{hoarding.owner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      {showAddForm && (
        <section className="add-inventory-page">
          <div className="add-inventory-header">
            <h1>Add inventory</h1>
            <p>Fill in the details and create the inventory item.</p>
          </div>

          <form
            className="add-inventory-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-group half">
              <label htmlFor="agency">Agency <span>*</span></label>
              <select id="agency" name="agency">
                <option value="">Select an agency</option>
                <option value="prime-outdoor">Prime Outdoor</option>
              </select>
            </div>

            <div className="form-group full">
              <label>
                City <span>*</span>
              </label>
              <input type="text" placeholder="e.g. 50000"/>
            </div>

            <div className="form-group full">
              <label>
                Location Name <span>*</span>
              </label>
              <input type="text" placeholder="e.g. 50000"/>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Area / Location</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>

              <div className="form-group">
                <label>Board / Media Code</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>
            </div>

            <div className="form-group full">
              <label>
                Original Size Text <span>*</span>
              </label>
              <input type="text" placeholder="e.g. 20x10 ft" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Width</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>

              <div className="form-group">
                <label>Height</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Direction / Facing</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>

              <div className="form-group">
                <label>Side</label>
                <input type="text" placeholder="e.g. 50000"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="illumination">Illumination</label>
                <select id="illumination" name="illumination">
                  <option value="">-</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="form-group">
                <label>Map Link</label>
                <input type="url" placeholder="https://maps.google.com/..." />
              </div>
            </div>

            <div className="vendor-box">
              <h3>Vendor & GPS Coordinates</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input type="text" placeholder="e.g. Laqshya Media" />
                </div>

                <div className="form-group">
                  <label>Vendor Rate</label>
                  <input type="text" placeholder="e.g. 50000" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Latitude</label>
                  <input type="text" placeholder="e.g. 12.9716" />
                </div>

                <div className="form-group">
                  <label>Longitude</label>
                  <input type="text" placeholder="e.g. 77.5946" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>One Time Mounting Cost Per SQFT</label>
                  <input type="text" placeholder="e.g. 5.50" />
                </div>

                <div className="form-group">
                  <label>One Time Printing Cost Per SQFT</label>
                  <input type="text" placeholder="e.g. 12.00" />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>

              <button type="submit" className="create-btn">
                Create
              </button>
            </div>
          </form>
        </section>
      )}
    </main>
  )
}

export default Inventory