"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "goals",
      [
        {
          name: "Lose 10kg",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-31",
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Complete Bootcamp Planner Assignment",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-31",
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Complete Bootcamp Project",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-02-01",
          end_date: "2024-02-29",
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Buy Audi A-4",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-06-30",
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Apply for Canadian Passport",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-31",
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Build Equipment Rental App",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-05-31",
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("goals", null, {});
  },
};
