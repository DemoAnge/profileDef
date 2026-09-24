import inv1 from "../assets/imgproyects/inv1.png"
import inv2 from "../assets/imgproyects/inv2.png"
import inv3 from "../assets/imgproyects/inv3.png"
import network from "../assets/imgproyects/reconition.jpg"
import network2 from "../assets/imgproyects/cnn.png"
import mprocess from "../assets/imgproyects/doc.jpeg"

const projects_data = [
  {
    id: "erpFloricola",
    technologies: ["Angular", "C#", "PostgreSQL", "API RESTful", "Scrum"],
    img: [],
    url: "",
  },
  {
    id: "invcontrol",
    technologies: ["React", "Django", "MySQL", "Tailwind", "API RESTful", "Python"],
    img: [inv1, inv2, inv3],
    url: "https://github.com/Invcontrol-Back/dasfrontend",
  },
  {
    id: "mushuc",
    technologies: ["Angular", "Oracle"],
    img: [mprocess],
    url: "",
  },
  {
    id: "raee",
    technologies: ["Python", "Modular Architecture", "IoT (evaluation)"],
    img: [network2],
    url: "",
  },
  {
    id: "cnn",
    technologies: ["Python", "YOLO"],
    img: [network, network2],
    url: "https://github.com/DemoAnge/redCnnIA",
  },
]

export default projects_data
