import inv1 from "../assets/imgproyects/inv1.png"
import inv2 from "../assets/imgproyects/inv2.png"
import inv3 from "../assets/imgproyects/inv3.png"
import network from "../assets/imgproyects/reconition.jpg"
import network2 from "../assets/imgproyects/cnn.png"
import mprocess from "../assets/imgproyects/doc.jpeg"

const projects_data =[
    {
    title: "CNN Clothing Color Recognition",
    description: "I developed a convolutional neural network to train it for recognizing individuals and the main clothing items they were wearing, identifying the colors of both upper and lower garments. Libraries that facilitated the project's development were utilized. This program includes an interface for real-time clothing color detection using the device’s camera.",
    participation: "Building the convolutional neural network using the YOLO library, training and testing the model and developing the interface to use the system.",
    technologies: ["Python"],
    img: [network, network2],
    url:"https://github.com/DemoAnge/redCnnIA"
    },
    {
    title: "InvControl (Inventory Management",
    description: "I designed an inventory management system to control non-current assets of the Faculty of Systems, Electronics, and Industrial Engineering at the Technical University of Ambato. This project included registration of categories, locations, and assets, asset deletion and control and detailed report generation.",
    participation: "I served as the project manager and was responsible for FrontEnd development of the modules.",
    technologies: ["Angular","Tailwind","Python","MySQL"],
    img: [inv1,inv2,inv3],
    url:"https://github.com/Invcontrol-Back/dasfrontend"
    },
    {
        title: "Document Process Map",
        description: "I developed a web application for the company “Mushuc Runa Ltda.” to control document management and access restrictions across different departments.",
        participation: "I contributed to the FrontEnd development of some application modules.",
        technologies: ["Angular" ],
        img: [mprocess],
        url:""
        },
        
];
export default projects_data