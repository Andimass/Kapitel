import React,{useEffect,useState} from "react";
import styles from "../../styles/MainSaitBar/MainSaitBar.module.scss";
import Title from "../../../../ui/title";
import WhyWe from "../WhyWe/WhyWe"
import DesignStages from "../DesignStages/DesignStages"; 
import SaitBarItem from "../../../../SaitBarItem/SaitBarItem";
import axios from 'axios';


const Main_SaitBar = () => {
      const [headerValues, setHeaderValues] = useState([]);
      const [headerTitle, setHeaderTitle] = useState([]);
      const [headerImage, setHeaderImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get_header_value/');
        const response_image = await axios.get('/api/get_header_image/');
        const response_title = await axios.get('/api/get_header_title/');
        setHeaderValues(response.data.headerValues);
        setHeaderImage(response_image.data.headerImage);
        setHeaderTitle(response_title.data.headerTitle);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isClassAdded3, setIsClassAdded3] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };
  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 650 && !isClassAdded2) {
      setIsVisible2(true);
      setIsClassAdded2(true);
    }
  };
  const handleScroll3 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1100 && !isClassAdded3) {
      setIsVisible3(true);
      setIsClassAdded3(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll3);
    return () => {
      window.removeEventListener("scroll", handleScroll3);
    }
  }, []);
  return (
    <section className={styles.saitbar} id="saitbar">
      <div className={styles.saitbarcontainer}>
        <div className={styles.main_content}>
            <WhyWe/>
            <DesignStages/>
        </div>
        <div className={styles.saitbar_content}>
            <aside className={styles.sait_bar}>
                <div className={styles.sait_bar__title}>
                    <Title className="sait-bar__title" level={1} text="Последние проекты"/>
                </div>
                <SaitBarItem  className={`saitbar ${isVisible ? "show" : ""}`} src={headerImage[0]} name={headerTitle[0]} text={headerValues[0]} line={1}/>
                <SaitBarItem  className={`saitbar ${isVisible2 ? "show" : ""}`} src={headerImage[1]} name={headerTitle[1]} text={headerValues[1]} line={1}/>
                <SaitBarItem  className={`saitbar ${isVisible3 ? "show" : ""}`} src={headerImage[2]} name={headerTitle[2]} text={headerValues[2]} line={1}/>
            </aside>
        </div>
      </div>
    </section>
  );
};

export default Main_SaitBar;
