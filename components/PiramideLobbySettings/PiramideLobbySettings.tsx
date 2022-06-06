interface PiramideLobbySettingsProps {
  gameSettings: {
    twoDecks: boolean;
    jokers: boolean;
    leftovers: boolean;
  };

  modifiers: number[];
}

const PiramideLobbySettings = ({
  gameSettings,
  modifiers,
}: PiramideLobbySettingsProps) => {
  return <p>asdasds</p>;
};

export default PiramideLobbySettings;
