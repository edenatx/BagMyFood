using System;

namespace BagMyFoodAPI.DTO {
    public struct User {
        public int id;
        public string firstName, lastName;

        public User(int id, string firstName, string lastName) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
        }

    }
}
