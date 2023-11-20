import './../../App.css';
import { ItemLastTask } from './ItemLastTask';

export const MyLastWork = () => {
    const lastTasks = [
        {url: '/task1.png', text: 'ilisis quam eget ex bam eget'},
        {url: '/task2.png', text: 'ilisis quam eget ex bam eget'},
        {url: '/task3.png', text: 'ilisis quam eget ex bam eget'},

    ]
    return (
        <div className="bg-color">
            <div className="container">
            <h2 className="h2-center">My last works</h2>
                <div className='display-flex content'>
                    <div className='last-tasks-content'>
                        <h3>My last tasks</h3>
                        <p className='last-task-text'>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin e a porta sed, facilisis quam eget ex blandit mper a porta sed, lacinia eu lectus.</p>
                        <div className='last-tasks'>
                            {lastTasks.map(item => {
                                return <ItemLastTask url={item.url} text={item.text} />
                            })}
                        </div>
                    </div>

                    <img src="/imageLastTask.png" alt="last task image" />
                
                </div>
                
            </div>
        </div>
    )
}