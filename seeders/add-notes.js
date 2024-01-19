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
      "notes",
      [
        {
          name: "Note: Complete 4 hours of running",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 1,
          importance: "Medium",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Note: Complete 4 hours of Cycling",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 2,
          importance: "Medium",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Note: Set up tables in MariaDB",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 3,
          importance: "Low",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Note: Seed the tables with fake data",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 4,
          importance: "Low",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Note: Select Project Topic",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 5,
          importance: "High",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },

        {
          name: "Note: Calculate number of days in Canada",
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          taskId: 9,
          importance: "High",
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
    await queryInterface.bulkDelete("notes", null, {});
  },
};
