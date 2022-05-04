import "./styles.css";
import { Score } from "./Vexflow";
import { Scale } from "@tonaljs/tonal";

export default function App() {

  const getPentatonicC = () => {
    const scale = Scale.get("A pentatonic");
    console.log("scale", scale);
    const staves = scale.notes.map((note) => ({
      keys: [`${note.toLocaleLowerCase()}/4`],
      duration: "w"
    }));
    return [...staves, ...staves.reverse()];
  };

  return (
    <div className="App">
      <Score keySignature="C" staves={[getPentatonicC()]} />
      {/* <Score
        keySignature="C"
        staves={[
          [
            {
              keys: ["c/4"],
              duration: "32s",
              stem_direction: -1
            },
            {
              keys: ["d/4"],
              duration: "32s",
              stem_direction: -1
            }
          ],
          [{ keys: ["e/4"], duration: "2s", stem_direction: -1 }],
          [
            {
              keys: ["f/4"],
              duration: "8r",
              stem_direction: -1
            },
            {
              keys: ["b/4"],
              duration: "8r",
              stem_direction: -1
            },
            {
              keys: ["b/4"],
              duration: "8r",
              stem_direction: -1
            },
            {
              keys: ["b/4"],
              duration: "4r",
              stem_direction: -1
            },
            {
              keys: ["b/4"],
              duration: "4r",
              stem_direction: -1
            },
            {
              keys: ["b/4"],
              duration: "8r",
              stem_direction: -1
            }
          ]
        ]}
      />
      <Score
        clef="percussion"
        staves={[
          [
            {
              keys: ["c/5/x2"],
              duration: "4",
              stem_direction: -1
            },
            {
              keys: ["c/5"],
              duration: "4",
              stem_direction: -1
            },
            {
              keys: ["c/5"],
              duration: "4",
              stem_direction: -1
            },
            {
              keys: ["c/5"],
              duration: "4",
              stem_direction: -1
            }
          ]
        ]}
      /> */}
    </div>
  );
}
