import { useState } from "react";
import { FiX, FiArrowRight } from "react-icons/fi";

const HeaderTopNews = () => {
  const [deactive, setClass] = useState("");

  return (
    <div className={`header-top-news bg_image ${deactive}`}>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content">
                  <span className="rn-badge">Oferta por tiempo Limitado</span>
                  <span className="news-text">
                    Sitio Empresarial con WordPress{" "}
                    <strong>3 pagos $780.00 MXN</strong>
                  </span>
                </div>
                <div className="content">
                  <button className="btn btn-default" style={{ marginLeft: "20px" }}>
                    <span className="cursor-pointer">
                      Quiero estar Online <FiArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close">
        <button className="close-button" onClick={() => setClass("deactive")}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default HeaderTopNews;
