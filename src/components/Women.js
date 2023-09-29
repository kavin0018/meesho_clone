import React from "react-dom";
import "../components/cards.css";

export default function Woman() {
  return (
    <div className="men-products">
      <div className="products-1">
        {/* <h1>This Is Men</h1> */}
        <div className="item-1">
          <img src="https://msr9tm.csb.app/Component/women/women-1.webp" />
          <p>Classy Sensational WomenDress</p>

          <h1>
            ₹186<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            4.0<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">3263</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-2">
          <img src="https://msr9tm.csb.app/Component/women/women-2.webp" />
          <p>Classy Fabulous Women Dress</p>

          <h1>
            ₹299<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            4.1<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">5426</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-3">
          <img src="https://msr9tm.csb.app/Component/women/women-3.webp" />
          <p>Classy Retro WomanDress</p>

          <h1>
            ₹399<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span
            className="rating"
            style={{
              background: "rgb(244, 182, 25)",
              fill: "rgb(255, 255, 255)"
            }}
          >
            3.2<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">306</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-4">
          <img src="https://msr9tm.csb.app/Component/women/women-4.webp" />
          <p>Trendy Designer WomanDress</p>

          <h1>
            ₹199<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            3.9<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">1263</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-5">
          <img src="https://msr9tm.csb.app/Component/women/women-5.webp" />
          <p>Comfy Partywear WomanDress</p>

          <h1>
            ₹159<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span>
            3.3
            <i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">23</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-6">
          <img src="https://msr9tm.csb.app/Component/women/women-6.webp" />
          <p>Urbane Partywear WomenDress</p>

          <h1>
            ₹239<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            3.8<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">2101</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-7">
          <img src="https://msr9tm.csb.app/Component/women/women-7.webp" />
          <p>Trendy Fashionable WomanDress</p>
          <h1>
            ₹219<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            3.9<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">2263</span>
          <p id="review">Reviews</p>
        </div>

        <div className="item-8">
          <img src="https://msr9tm.csb.app/Component/women/women-8.webp" />
          <p>Myra Drishya Sarees</p>

          <h1>
            ₹499<span id="onwards">onwards</span>
          </h1>
          <h6>Free Delivery</h6>
          <span className="rating">
            4.3<i class="fa-solid fa-star"></i>
          </span>
          <span id="onwards">6754</span>
          <p id="review">Reviews</p>
        </div>
      </div>
    </div>
  );
}
