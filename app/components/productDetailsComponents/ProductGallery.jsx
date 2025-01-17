import { getProductDetails } from "@/app/redux-system/slices/productDetailsSlice";
import { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

const ProductGallery = (props) => {
  const { productDetails, productDetailsLoading } = useSelector(
    (state) => state.productDetailsData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(props.prodId && props.prodId));
  }, []);

  const imageRefs = useRef([]);

  const [openCategory, setOpenCategory] = useState({
    description: false,
    size: false,
    color: false,
    policy: false,
  });

  const scrollToImage = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleCategory = (category) => {
    setOpenCategory({
      ...openCategory,
      [category]: !openCategory[category],
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-start gap-[4em] mt-8">
        {/* Small Pictures */}
        <div className="flex flex-col space-y-4">
          {productDetails?.data?.productImages.map((image, index) => (
            <img
              key={index}
              src={`${
                process.env.NEXT_PUBLIC_IMAGE_DOMAIN
              }/${image.image.replace(/ /g, "%20")}`}
              alt={`Thumbnail ${index}`}
              onClick={() => scrollToImage(index)} // التنقل للصورة الكبيرة
              className="w-20 h-24 object-cover cursor-pointer	focus:ring-4 focus:ring-black"
            />
          ))}
        </div>

        {/* Large Pictures */}
        <div
          className="flex flex-col space-y-4 h-[70vh] overflow-scroll"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {productDetails?.data?.productImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="flex justify-center"
            >
              <img
                src={`${
                  process.env.NEXT_PUBLIC_IMAGE_DOMAIN
                }/${image.image.replace(/ /g, "%20")}`}
                alt={`Large Image ${index}`}
                className="w-[500px] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[5em]">
        <ul className="space-y-4">
          {/* description  */}
          {productDetails?.data?.data?.product_description?.description && (
            <li className="border-b-[1px] border-t-[1px]	pb-[2em] pt-[2em]">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory("description")}
              >
                <h3 className="font-thin text-lg">Description</h3>
                {openCategory.description ? <FaMinus /> : <FaPlus />}
              </div>
              {openCategory.description && (
                <div className="ml-4 mt-2 space-y-2 h-[250px]">
                  <p>
                    {
                      productDetails?.data?.data?.product_description
                        ?.description
                    }
                  </p>
                </div>
              )}
            </li>
          )}

          {/* size */}
          <li className="border-b-[1px] 	pb-[2em] pt-[2em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("size")}
            >
              <h3 className="font-thin text-lg">SIZE & FIT</h3>
              {openCategory.size ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.size && (
              <div className="ml-4 mt-2 space-y-2 h-[250px]">
                <p>{props?.selectedSize}</p>
              </div>
            )}
          </li>
          {/* return policy */}
          <li className="border-b-[1px]	pb-[2em] pt-[2em]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory("policy")}
            >
              <h3 className="font-thin text-lg">RETURN POLICY</h3>
              {openCategory.policy ? <FaMinus /> : <FaPlus />}
            </div>
            {openCategory.policy && (
              <div className="ml-4 mt-2 space-y-2 h-[200px] overflow-y-scroll">
                <span>
                  PLEASE READ OUR RETURNS POLICY, WHICH IS LOCATED IN OUR TERMS
                  & CONDITIONS PAGE, CAREFULLY BEFORE ORDERING.
                </span>
                <span>
                  YOU CAN RETURN MOST BUT NOT ALL PRODUCTS WITHIN 14 DAYS OF
                  RECEIVING THEM PROVIDED THAT ALL ITEMS ARE IN PERFECT AND
                  UNUSED CONDITION WITH ALL THE ORIGINAL TAGS ATTACHED.
                </span>
                <span>
                  PLEASE NOTE THAT THE RETURN REQUEST FOR CATEGORIES SUCH AS
                  EVENING WEAR, SHOES, JEWELRY MUST BE PLACED WITHIN 24 HOURS OF
                  RECEIVING THE ITEMS.
                </span>
                <span>
                  UNDERGARMENTS, SWIMMING SUITS, FRAGRANCES, BEAUTY ITEMS CANNOT
                  BE RETURNED. SPECIAL ORDER OR PERSONALIZED ITEMS CANNOT BE
                  RETURNED.
                </span>
                <span>
                  SHOES SHOULD BE RETURNED UNMARKED ALONG WITH THE PACKAGING IN
                  PERFECT CONDITION.
                </span>
                <span>
                  ITEMS THAT ARE USED, DAMAGED, SOILED OR RETURNED WITHOUT THE
                  CORRECT PACKAGING, LABELS AND DESIGNER AUTHENTICITY CARDS IN
                  PERFECT CONDITION MAY NOT BE ACCEPTED AND WILL BE SENT BACK TO
                  THE CLIENT AT THE CLIENT'S EXPENSE.
                </span>
                <span>
                  PLEASE NOTE THAT REFUNDS WILL BE MADE AFTER DEDUCTING THE COST
                  OF SHIPPING BOTH WAYS AND ANY ASSOCIATED CUSTOMS.
                </span>
                <span>
                  PLEASE REFER TO THE RETURNS SECTION OF OUR TERMS & CONDITIONS
                  FOR MORE DETAILS.
                </span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductGallery;
