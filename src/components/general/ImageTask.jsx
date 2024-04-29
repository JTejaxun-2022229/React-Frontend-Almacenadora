import imageTask from '../../assets/img/listaTareas.png'

export const ImageTask = ({ text }) => {
    return (
        <div>
            <img src={imageTask} alt="ListaTareas" />
            <span>{text}</span>
        </div>
    )
}