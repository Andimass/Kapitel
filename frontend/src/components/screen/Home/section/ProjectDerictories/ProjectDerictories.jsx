import React,{useState,useEffect} from "react";
import styles from "../../styles/ProjectDerictories/ProjectDerictories.module.scss";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";
import ProjectCard from "../../../../ProjectCard/ProjectCard";
import ProjectDerictButton from "./Button/ProjectDerict_Button";
import axios from 'axios';

import img1 from "../../../../../assets/img/ProjectCard/IMG_3.png";
import img2 from "../../../../../assets/img/ProjectCard/IMG_2.png";
import img3 from "../../../../../assets/img/ProjectCard/IMG_4.png";
import img4 from "../../../../../assets/img/ProjectCard/IMG_5.png";
import img5 from "../../../../../assets/img/ProjectCard/IMG_6.png";
import img6 from "../../../../../assets/img/ProjectCard/IMG_7.png";
import img7 from "../../../../../assets/img/ProjectCard/IMG_8.png";


const ProjectDerictories=()=>{
    const [isVisible, setIsVisible] = useState(false);
    const [isClassAdded, setIsClassAdded] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 3200 && !isClassAdded) {
        setIsVisible(true);
        setIsClassAdded(true);
      }
    };
      const [project_derictorie_Values, setproject_derictorie_Values] = useState([]);
      const [project_derictorie_Title, setproject_derictorie_Title] = useState([]);
      const [project_derictorie_Image, setproject_derictorie_Image] = useState([]);
      const [project_derictorie_Square, setproject_derictorie_Square] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get_project_derictories_value/');
        const response_title = await axios.get('/api/get_project_derictories_title/');
        const response_image = await axios.get('/api/get_project_derictories_image/');
        const response_square = await axios.get('/api/get_project_derictories_square/');
        setproject_derictorie_Values(response.data.project_derictorie_Values);
        setproject_derictorie_Title(response_title.data.project_derictorie_Title);
        setproject_derictorie_Image(response_image.data.project_derictorie_Image);
        setproject_derictorie_Square(response_square.data.project_derictorie_Square);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return(
        <section className={styles.ProjectDerictories} id="ProjectDerictories">
            <div className={styles.ProjectDerictories_container}>
                <div className={styles.ProjectDerictories_container__titleCont}>
                    <div className={styles.ProjectDerictories_container__titleCont_cols1}></div>
                    <div className={styles.ProjectDerictories_container__titleCont_cols2}>
                        <Title className={`projectderictories__title ${isVisible ? "show" : ""}`} text="Каталог реализованных проектов" level={1}/>
                        <div className={styles.ProjectDerictories_container__titleCont_cols2_text}>
                            <Text className={`projectderictories__text ${isVisible ? "show" : ""}`} text="Ежегодно компания «Капитель» реализует от 50
                                крупных объектов под ключ. Мы делаем индивидуальное
                                проектирование за 30-45 дней, включая этапы
                                согласования."/>
                        </div>
                    </div>
                </div>
                <div className={styles.ProjectDerictories_container__CardCont}>
                        <div className={styles.card_rows1__container}>
                            <Title className="card-rows1__title" text="Место для вашего дома" level={2}/>
                            <Text className="card-rows1__text" text="жилые помещения"/>
                        </div>
                        <ProjectCard src={project_derictorie_Image[0]} name={project_derictorie_Title[0]} arcticul={project_derictorie_Square[0]} text={project_derictorie_Values[0]}/>
                        <ProjectCard src={project_derictorie_Image[1]} name={project_derictorie_Title[1]} arcticul={project_derictorie_Square[1]} text={project_derictorie_Values[1]}/>
                        <ProjectCard src={project_derictorie_Image[2]} name={project_derictorie_Title[2]} arcticul={project_derictorie_Square[2]} text={project_derictorie_Values[2]}/>
                        <ProjectCard src={project_derictorie_Image[3]} name={project_derictorie_Title[3]} arcticul={project_derictorie_Square[3]} text={project_derictorie_Values[3]}/>
                        <ProjectCard src={project_derictorie_Image[4]} name={project_derictorie_Title[4]} arcticul={project_derictorie_Square[4]} text={project_derictorie_Values[4]}/>
                        <ProjectCard src={project_derictorie_Image[5]} name={project_derictorie_Title[5]} arcticul={project_derictorie_Square[5]} text={project_derictorie_Values[5]}/>
                        <ProjectCard src={project_derictorie_Image[6]} name={project_derictorie_Title[6]} arcticul={project_derictorie_Square[6]} text={project_derictorie_Values[6]}/>
                        <ProjectCard src={project_derictorie_Image[7]} name={project_derictorie_Title[7]} arcticul={project_derictorie_Square[7]} text={project_derictorie_Values[7]}/>
                        <div className={styles.card_rows2__container}>
                            <ProjectDerictButton name="Смотреть еще"/>
                        </div>
                </div>
            </div>
        </section>
    );
};
 
export default ProjectDerictories;