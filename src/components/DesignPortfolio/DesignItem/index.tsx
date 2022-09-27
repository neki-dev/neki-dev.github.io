import './styles.scss';

type Props = {
  image: string
  isActive: () => boolean
  onClick: () => void
};

export default function DesignItem({
  image, isActive, onClick,
}: Props) {
  return (
    <div
      class={`design-item ${isActive() ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={image} alt="" />
    </div>
  );
}
