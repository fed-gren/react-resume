import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import config from "../config";

const printDocument = _ => {
  const input = document.querySelector(".resume_main");
  html2canvas(input).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    let imgWidth = 210;
    let pageHeight = 295;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let doc = new jsPDF("p", "mm", "a4", true);
    let position = 0;
    doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight,
        "",
        "FAST"
      );
      heightLeft -= pageHeight;
    }
    doc.save(`${config.contact.name}_resume.pdf`);
  });
};

export { printDocument };
