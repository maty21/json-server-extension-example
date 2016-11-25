const amount = 100;
 const func =next =>create => {
    const path = `feed/feedList.json`;
    const data = (amount)=> {
        let temp = [];
        for (let i = 0; i < amount; i++) {
            temp.push({
                    id: `${i}N12134`,
                    newNotificationCount: i * 3,
                    isRead: (i % 2 == 0),
                    isStarMark: (i % 4 == 0),
                    iconType: "SocialNotifications",
                    description: i + ": this is a new  feed ",
                    date: new Date(Date.now()).toLocaleString()
                }
            )
        }
        return temp;
    }
    create({data: {feed: data(amount)}, path: path})
    next(create);

}
module.exports = func;
