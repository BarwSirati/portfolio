import React from "react";
import { GalleryHead } from "./Gallery";

export default function Profile() {
  const title = "Profile();";
  return (
    <section id="profile" className="portfolio" style={{ padding: "20px" }}>
      <div className="container-fluid">
        <GalleryHead title={title} />
        <div className="wrap mx-auto">
          <div className="img-logo-flex">
            <div className="masthead-avatar img-logo2 "></div>
          </div>
          <div className="text-flex" style={{ marginBottom: "50px" }}>
            <div style={{ marginTop: "10px" }}>
              <div className="text-border">
                <h2 className="responsive-text">
                  ชื่อ-นามสกุล : นายสิระติ หิรัญธานี
                </h2>
                <p>&nbsp;</p>
                <h2 className="responsive-text">
                  ที่อยู่ : 3 ม.5 ตำบลทุ่งกง อำเภอกาญจนดิษฐ์ จังหวัดสุราษฎร์ธานี
                  84290
                </h2>
                <p>&nbsp;</p>
                <h2 className="responsive-text">
                  ว/ด/ป เกิด : 10 พฤษภาคม 2546 &nbsp;&nbsp; อายุ : 17 ปี
                </h2>
                <p>&nbsp;</p>
                <h2 className="responsive-text">
                  ความสามารถพิเศษ : สร้าง Web Application และ
                  เขียนโปรแกรมคอมพิวเตอร์
                </h2>
                <p>&nbsp;</p>
                <h2 className="responsive-text">
                  งานอดิเรก : สร้าง Web Application และ อ่านหนังสือ
                </h2>
                <p>&nbsp;</p>
                <h2 className="responsive-text">
                  คติประจำใจ : "ขยัน หมั่นเพียร อดทน"
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
