import inv1 from "../assets/imgproyects/inv1.png"
import inv2 from "../assets/imgproyects/inv2.png"
import inv3 from "../assets/imgproyects/inv3.png"
import network from "../assets/imgproyects/reconition.jpg"
import network2 from "../assets/imgproyects/cnn.png"
import mprocess from "../assets/imgproyects/doc.jpeg"

const projects_data = [
  {
    title: "InvControl — Faculty Inventory (2024)",
    description: "Inventory management for non-current assets at UTA FISEI: categories, locations, assets, deletion/control flows, and reports. Replaced spreadsheet workflows with a web app backed by a REST API.",
    participation: "Led the full development lifecycle and coordinated delivery — React/Tailwind UI, Django/MySQL REST API, and handover docs.",
    technologies: ["React", "Tailwind", "Django", "MySQL", "REST API"],
    img: [inv1, inv2, inv3],
    url: "https://github.com/Invcontrol-Back/dasfrontend",
  },
  {
    title: "Document Process Map — Mushuc Runa (2024)",
    description: "Web modules for document management and department access restrictions at Cooperativa Mushuc Runa Ltda.",
    participation: "Front-end modules in Angular; production fixes as junior contributor.",
    technologies: ["Angular", "Oracle"],
    img: [mprocess],
    url: "",
  },
  {
    title: "RAEE / WEEE Traceability Research Platform (2024–2025)",
    description: "Modular research architecture for electronic-waste (RAEE) traceability across five phases. Evaluated IoT data capture and ledger-style integrity as design options. Work supported a peer-reviewed publication.",
    participation: "Architecture, research implementation, and technical writing for the paper.",
    technologies: ["Python", "Modular Architecture", "IoT (evaluation)"],
    img: [network2],
    url: "",
  },
  {
    title: "CNN Clothing Color Recognition",
    description: "Convolutional model with a camera UI for garment color detection. YOLO-assisted pipeline built in Python for training, testing, and real-time camera inference.",
    participation: "Model training/testing and camera interface.",
    technologies: ["Python", "YOLO"],
    img: [network, network2],
    url: "https://github.com/DemoAnge/redCnnIA",
  },
]

export default projects_data