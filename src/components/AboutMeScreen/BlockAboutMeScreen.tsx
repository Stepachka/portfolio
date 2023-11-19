import './style.css';

export const BlockAboutMeScreen = () => {

    const text = 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quam eget ex blandit cursus. Proin e a porta sed, facilisis quam eget ex blandit mper a porta sed, lacinia eu lectus.'
    return ( 
    
            <div className='block-about-me'>
                <div className='content-block-about-me'>
                    <h1 className='h2-about-me'>About me</h1>
                    <p className='text-about-me'>{text}</p>
                    <div className='btn-more'>
                        <div className='pointer'></div>
                        <p className='btn-more-text'>More</p>
                    </div>
                </div>
            </div>
    )
}