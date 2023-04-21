import { useMemo } from "react";
import Modal from "react-lean-modal";

import { useDevNotes } from "#/utils/store/dev-notes";

const DevNotes: React.FC = () => {
  const { devNotes, setDevNotes } = useDevNotes();

  const NOTES = useMemo<string[]>(
    () => [
      "An attempt was made to keep the theme as similar to WALL.app as possible.",
      "The project uses a package called `react-easy-marquee` that is a creation of the developer.",
      "Favicons along with a site manifest and page title have been taken care of.",
      "All the SVGs are compressed and have a dynamic size based on their parent element.",
      "Over-engineering thoughts for using SSG via Next's `getStaticProps were a part of the development journey.`",
      "There is added pizzas for when you go over to subscribe to an NFT creators profile.",
      "The page is responsive to various screen sizes.",
      "The creator's profiles progress is animated",
      "Pizzaz has been written as pizzas on purpose.",
      "Hovering over the cards for Recent Sales is a journey.",
      "The font Sharp Grotesk was added for refinement.",
    ],
    []
  );

  return (
    <div className="overflow-hidden">
      <Modal
        enterAnimation="slide-bottom"
        exitAnimation="slide-bottom"
        timeout={250}
        isOpen={devNotes}
        onClose={() => setDevNotes(false)}
        titleElement="Developers Notes"
        classNames={{
          header: "text-xl font-medium",
        }}
      >
        A few notes on the project from the developer:
        <ul className="mt-4 px-8">
          {NOTES.map((note) => (
            <li key={note} className="my-2 list-item list-disc text-sm">
              {note}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default DevNotes;
