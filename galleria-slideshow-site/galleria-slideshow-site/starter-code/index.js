
// var modal = document.getElementById("myModal");

// var img = document.getElementById("assets");
// var modalImg = document.getElementById("modal-inner");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
// };
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function () {
//   modal.style.display = "none";
// };



    <div className="myModal" style={{ display: !preview ? "block" : "none" }}>
      <div className="modal-inner">
        <span style={{ color: "#fff" }} onClick={() => setPreview(!preview)}>
          <h5>Close</h5>
        </span>
        <img src={Slideshowdata[counter].images.hero.small.toString()} alt="" />
      </div>
    </div>;