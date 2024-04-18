export interface ISearchProfileProps {
    visible: boolean;
    onClose: () => void;
    profileName: (user: GitInfosProps) => void;
  }