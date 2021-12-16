import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


// nav component
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    // useEffect hook
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    // // initializing the category state
    // const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // // useState hook
    // const [categories] = useState([
    //     {
    //         name: 'commercial',
    //         description: 'Photos of grocery stores, food trucks, and other commercial projects',
    //     },
    //     {
    //         name: 'portraits',
    //         description: 'Portraits of people in my life'
    //     },
    //     {
    //         name: 'food',
    //         description: 'Delicious delicacies'
    //     },
    //     {
    //         name: 'landscape',
    //         description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    //     },
    // ]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                    📸</span>
                    Oh Snap!
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className='mx-2'>
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                       <span>Contact</span> 
                    </li>
                    {categories.map((category) => (
                        // short-circuit expression
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'}`
                        } key={category.name}>
                            <span onClick={() => { setCurrentCategory(category)}} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;