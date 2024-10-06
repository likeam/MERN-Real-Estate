import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(formData);

  const handleImageSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
  };

  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type == "number" ||
      e.target.type == "text" ||
      e.target.type == "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const storeImage = async (file) => {
    setLoading(true);
  };

  return (
    <>
      <main className=" p-3 max-w-4xl mx-auto">
        <h1 className=" text-3xl font-semibold text-center my-7">
          Create Listing
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col sm:flex-row gap-6"
        >
          <div className=" flex flex-col gap-4 flex-1">
            <input
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Name"
              id="name"
              maxLength="62"
              minLength="10"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <textarea
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Discription"
              id="discription"
              required
              onChange={handleChange}
              value={formData.description}
            />

            <input
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Adress"
              id="adress"
              required
              onChange={handleChange}
              value={formData.address}
            />

            <div className=" flex gap-6 flex-wrap">
              <div className=" flex gap-2">
                <input
                  onChange={handleChange}
                  checked={formData.type === "sale"}
                  type="checkbox"
                  className=" w-5"
                  id="sale"
                />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  checked={formData.type === "rent"}
                  type="checkbox"
                  className=" w-5"
                  id="rent"
                />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  checked={formData.parking}
                  id="parking"
                  type="checkbox"
                  className=" w-5"
                />
                <span>Parking Spot</span>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  checked={formData.furnished}
                  type="checkbox"
                  className=" w-5"
                  id="furnished"
                />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  checked={formData.offer}
                  type="checkbox"
                  className=" w-5"
                  id="offer"
                />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className=" flex items-center gap-2">
                <input
                  type="number"
                  className="border p-3 border-gray-300 rounded-lg"
                  min="1"
                  max="10"
                  id="bedrooms"
                  required
                  onChange={handleChange}
                  value={formData.bedrooms}
                />
                <span>Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onChange={handleChange}
                  value={formData.bathrooms}
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                />
                <p>Baths</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="regularPrice"
                  min="50"
                  max="10000000"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  value={formData.regularPrice}
                  onChange={handleChange}
                />
                <div className="flex flex-col items-center">
                  <p>Regular price</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  id="discountPrice"
                  min="0"
                  max="10000000"
                  required
                  className="p-3 border border-gray-300 rounded-lg"
                  value={formData.discountPrice}
                  onChange={handleChange}
                />
                <div className="flex flex-col items-center">
                  <p>Discounted price</p>

                  <span className="text-xs">/Month</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col flex-1 gap-4">
            <p className=" font-semibold">
              Images:
              <span className=" font-normal text-gray-600 ml-2">
                {" "}
                The first image will be the cover (max 6){" "}
              </span>
            </p>
            <div className=" flex gap-4">
              <input
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                className=" p-3 border border-gray-300 rounded w-full"
                id="images"
                accept="image/*"
                multiple
              />
              <button
                disabled={uploading}
                onClick={handleImageSubmit}
                className=" p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
              >
                {uploading ? "Uploading..." : "Uploaded"}
              </button>
            </div>
            <p className=" text-red-700 text-sm">
              {imageUploadError && imageUploadError}
            </p>

            {formData.imageUrls.length > 0 &&
              formData.imageUrls.map((url, index) => (
                <div
                  className=" flex justify-between p-3 border items-center"
                  key={url}
                >
                  <img
                    src={url}
                    alt="listing img"
                    className=" w-20 h-20 object-contain rounded-lg"
                  />
                  <button
                    className=" p-3 text-red-700 rounded-lg uppercase hover:opacity-70"
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            <button
              disabled={loading || uploading}
              className=" p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70"
            >
              {loading ? "Creating ..." : "Creating Listing"}
            </button>
            {error && <p className=" text-red-700 text-sm">{error}</p>}
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateListing;
