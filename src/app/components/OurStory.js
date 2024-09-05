
export default function OurStory() {
  return (
    <div className="px-4 bg-[#fff] py-20 mx-auto max-w-full lg:pb-24">
      <div className="flex flex-col justify-center items-center mb-2 md:mx-auto sm:text-center md:mb-24">
        <div>
          <p className="inline-block parisienne-regular px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-[#0c5b47] rounded-full bg-teal-accent-400">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-[#E6BE8A] sm:text-4xl md:mx-auto">
          Perfect florist spot
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center bg-[url('https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-img-1.png')] bg-center bg-no-repeat">
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#0c5b47] font-medium text-xl ">
                Wedding Floral Arrangements
              </h6>
              <p className="text-sm text-[#000] font-normal">
                Make your special day unforgettable with our stunning wedding flowers and bridal bouquets
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#0c5b47] font-medium text-xl">
                Corporate Floral Services
              </h6>
              <p className="text-sm text-[#000] font-normal">
                Enhance your workspace or impress clients with our elegant corporate floral arrangements.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#0c5b47] font-medium text-xl">
                Sympathy & Funeral Flowers
              </h6>
              <p className="text-sm text-[#000] font-normal">
                Express your condolences with our thoughtful and respectful floral tributes.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#0c5b47] font-medium text-xl">
                Custom Bouquets
              </h6>
              <p className="text-sm text-[#000] font-normal">
                Need something specific? Let our skilled florists create a custom bouquet that reflects your unique style.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-center bg-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://www.floralallure.me/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-05-03-at-12.46.40-q5ws47bts3h3cy1gz7awtxtyjppy07ap6kuig8peyo.jpeg"
            alt=""
          />
          <img
            className="object-center w-full h-48 rounded shadow-lg"
            src="https://realflowers.ae/wp-content/uploads/2024/04/Untitled-design-95.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://www.nancysfloral.com/product_images/uploaded_images/find-top-quality-cut-flowers-at-nancys-floral.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};