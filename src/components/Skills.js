import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";


const SkillDiagram = (props) => {
    return (
        <div style={{ width: '100px' }} >
            <VisibilitySensor >
                {({ isVisible }) => {
                    const percentage = isVisible ? props.percentage : 0;
                    return (
                        <CircularProgressbarWithChildren value={percentage} styles={{
                            path: {
                                stroke: `green`,
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                strokeWidth:
                                    6,
                                trail: {
                                    stroke: 'gray',
                                    strokeLinecap: 'butt',
                                },
                            },
                        }}>
                            <img
                                style={{ width: 50, marginTop: -5 }}
                                src={props.pic}
                            />
                            <div style={{ fontSize: 15, marginTop: -5 }}>
                                {/* <strong>{percentage} %</strong> */}
                            </div>

                        </CircularProgressbarWithChildren>
                    );
                }}
            </VisibilitySensor>
        </div>)
};


function Skills() {
    const CircleDiagramsValues = [
        { pic: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png", percentage: 66, skill: 'html' },
        { pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png", percentage: 70, skill: 'css' },
        { pic: "https://p7.hiclipart.com/preview/139/631/722/javascript-logo-html-comment-python-15.jpg", percentage: 80, skill: 'js' },
        { pic: "https://www.php.net/images/logos/new-php-logo.svg", percentage: 10, skill: 'php' },
        { pic: "https://www.php.net/images/logos/new-php-logo.svg", percentage: 10, skill: 'php' },
        { pic: "https://www.php.net/images/logos/new-php-logo.svg", percentage: 10, skill: 'php' }]

    return (
        <div className="flex Skills-page">
            <div className=" Circular-Skills" >
                {CircleDiagramsValues.map(CircleDiagramsValue => (
                    <SkillDiagram pic={`${CircleDiagramsValue.pic}`} percentage={CircleDiagramsValue.percentage} skill={`${CircleDiagramsValue.skill}`} />

                ))}
            </div>

            <div className="companies-title"> <p className= 'TextRotate'>Skills</p> 
            <p>&amp; </p>
            <p className= 'TextRotate'>Clients</p> </div>



            <div className='companies'>
                <img className="first-row" src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                <div className="second-row">
                    <img src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                    <img src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                </div>
                <div className="third-row">
                    <img src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                    <img src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                    <img src="https://codi.tech/wp-content/uploads/2019/09/Codi-Logo-Colored-White-bg-1.png"></img>
                </div>
            </div>
        </div>



    )



}

export default Skills;