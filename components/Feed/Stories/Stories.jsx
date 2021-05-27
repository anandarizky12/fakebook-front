import StoryCard from "./StoryCard"

function Stories() {
    const stories=[
    {
        Name : "Mai",
        Profile:"https://static.wikia.nocookie.net/aobuta/images/d/d8/Mai_Sakurajima_Anime_-_Screenshot_1.png/revision/latest/scale-to-width-down/300?cb=20181016030235",
        Story:"https://wallpapercave.com/wp/wp4055494.png"
    },{
        Name:"Messi",
        Profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Argentina_team_in_St._Petersburg_%28cropped%29_Messi.jpg/171px-Argentina_team_in_St._Petersburg_%28cropped%29_Messi.jpg",
        Story:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/01/3898416578.jpg"
    },
    {
        Name : "Mai",
        Profile:"https://static.wikia.nocookie.net/aobuta/images/d/d8/Mai_Sakurajima_Anime_-_Screenshot_1.png/revision/latest/scale-to-width-down/300?cb=20181016030235",
        Story:"https://wallpapercave.com/wp/wp4055494.png"
    },{
        Name:"Messi",
        Profile:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Argentina_team_in_St._Petersburg_%28cropped%29_Messi.jpg/171px-Argentina_team_in_St._Petersburg_%28cropped%29_Messi.jpg",
        Story:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/01/3898416578.jpg"
    }]
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
            {stories.map((story,index)=>(
                <StoryCard key={index} name={story.Name} profile={story.Profile} src={story.Story}/>
            ))}
        </div>
    )
}

export default Stories
