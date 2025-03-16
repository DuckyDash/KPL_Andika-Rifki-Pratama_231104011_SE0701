class CharacterGamePos {
    constructor() {
      this.state = "Berdiri";
      this.transitions = {
        "Berdiri": { "TombolS": "Jongkok", "TombolW": "Terbang" },
        "Jongkok": { "TombolW": "Berdiri", "TombolS": "Tengkurap" },
        "Tengkurap": { "TombolW": "Jongkok", "TombolX": "Terbang" },
        "Terbang": { "TombolS": "Berdiri", "TombolW": "Jongkok" }
      };
    }
  
    transition(tombol) {
      const nextState = this.transitions[this.state]?.[tombol];
  
      if (nextState) {
        if (this.state === "Terbang" && nextState === "Jongkok") {
          console.log("Posisi landing");
        } else if (this.state === "Berdiri" && nextState === "Terbang") {
          console.log("Posisi take off");
        }
  
        this.state = nextState;
      } else {
        console.log("Transisi tidak valid");
      }
    }
  }
  
  const sm = new CharacterGamePos();
  sm.transition("TombolW");
  sm.transition("TombolS");
  sm.transition("TombolS");
  sm.transition("TombolS");
  sm.transition("TombolW");
  sm.transition("TombolW");
  sm.transition("TombolW");
  sm.transition("TombolW");