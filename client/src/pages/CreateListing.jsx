const CreateListing = () => {
  return (
    <>
      <main className=" p-3 max-w-4xl mx-auto">
        <h1 className=" text-3xl font-semibold text-center my-7">
          Create Listing
        </h1>
        <form className=" flex flex-col sm:flex-row gap-6">
          <div className=" flex flex-col gap-4 flex-1">
            <input
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Name"
              id="name"
              maxLength={62}
              minLength={10}
              required
            />
            <textarea
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Discription"
              id="discription"
              required
            />

            <input
              type="text"
              className=" border p-3 rounded-lg"
              placeholder="Adress"
              id="adress"
              required
            />

            <div className=" flex gap-6 flex-wrap">
              <div className=" flex gap-2">
                <input type="checkbox" className=" w-5" id="sale" />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className=" w-5" id="rent" />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className=" w-5" id="parking" />
                <span>Parking Spot</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className=" w-5" id="furnished" />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className=" w-5" id="offer" />
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
                />
                <span>Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <input
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
                type="file"
                className=" p-3 border border-gray-300 rounded w-full"
                id="images"
                accept="image/*"
                multiple
              />
              <button className=" p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                Upload
              </button>
            </div>
            <p className=" text-red-700 text-sm">img</p>
            <button className=" p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-70">
              Creating Listing
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreateListing;
