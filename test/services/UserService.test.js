
const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Karla B", "Karla")
        expect(user.username).toBe("Karla B")
        expect(user.name).toBe("Karla")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test ( " 2 . Get all user data in a list " , () => {
        const user = UserService.create(1," Karla B " , " Karla " )
        const userInfoInList = UserService.getInfo(user)
        expect (userInfoInList[0]).toBe(1)
        expect (userInfoInList[1]).toBe(" Karla B " )
        expect (userInfoInList[2]).toBe(" Karla " )
        expect (userInfoInList[3]).toBe("Sin bio" )
      } )

      test("3. Update username", () => {
        const user = UserService.create(1, "Karla B", "Karla")
        UserService.updateUserUsername(user, "Balta")
        expect(user.username).toBe("Balta")
      })
    
      test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "Karla B1", "Karla")
        const user2 = UserService.create(1, "Karla B2", "Karla")
        const user3 = UserService.create(1, "Karla B3", "Karla")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Karla B1")
        expect(usernames).toContain("Karla B2")
        expect(usernames).toContain("Karla B3")
      })
    
})