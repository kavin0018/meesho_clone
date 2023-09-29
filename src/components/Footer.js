import React from "react-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-text">
          <h1>Shop Non-Stop on Meesho</h1>
          <p>
            Trusted by more than 1 Crore Indians Cash on Delivery | Free
            Delivery
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=18aa3730c2c483-05b78bf78ab261-26031f51-100200-18aa3730c2d467" target="blank"><img class="_12dJy" height="54" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" /></a>
                        <a href="https://apps.apple.com/us/app/meesho/id1457958492" target="blank"><img class="_12dJy" height="54" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" /></a>
        </div>

        <div className="list-1">
          <ul>
            <li>Careers</li>
            <li>Become a supplier</li>
            <li>Hall of Fame</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="list-2">
          <ul>
            <li>Legal and Policies</li>
            <li>Meesho Tech Blog</li>
            <li>Notices and Returns</li>
          </ul>
        </div>

        <div className="list-3">
          <h4>Reach out to us</h4>
          <i class="fa-brands fa-facebook" style={{ color: "#8f8f8f" }}></i>
          <i class="fa-brands fa-instagram" style={{ color: "#8f8f8f" }}></i>
          <i class="fa-brands fa-youtube" style={{ color: "#8f8f8f" }}></i>
          <i class="fa-brands fa-linkedin" style={{ color: "#8f8f8f" }}></i>
          <i class="fa-brands fa-twitter" style={{ color: "#8f8f8f" }}></i>
        </div>

        <div className="list-4">
          <h4>Contact Us</h4>
          <p id="address">
            Fashnear Technologies Private Limited, <br />
            CIN: U74900KA2015PTC082263 06-105-B, 06-102, (138 Wu) Vaishnavi
            Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli,
            Bengaluru-560103, Karnataka, India E-mail address: query@meesho.com
            © 2015-2023 Meesho.com
          </p>
        </div>
      </div>
    </footer>
  );
}
