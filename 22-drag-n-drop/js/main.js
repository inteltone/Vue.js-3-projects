let dragged;

const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  dragged = event.target;
	event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  event.target.classList.remove("dragging");
});

const targets = document.querySelectorAll(".droptarget");

targets.forEach(target => {
	target.addEventListener("dragover", (event) => {
		 event.preventDefault();
	  },
	  false,
	);
	
	target.addEventListener("dragenter", (event) => {
	  if (event.target.classList.contains("dropzone")) {
		 event.target.classList.add("dragover");
	  }
	});
	
	target.addEventListener("dragleave", (event) => {
	  if (event.target.classList.contains("dropzone")) {
		 event.target.classList.remove("dragover");
	  }
	});
	target.addEventListener("drop", (event) => {
	  event.preventDefault();
	  if (event.target.classList.contains("dropzone")) {
		 event.target.classList.remove("dragover");
		 event.target.appendChild(dragged);
	  }
	});
})

