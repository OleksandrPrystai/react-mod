import './TodosStyle.css'

export default function TodosComponent({item}) {
    return (
        <div className='todosStyle'>

            {
                    <p>{item.title}</p>
            }


        </div>
    )
}