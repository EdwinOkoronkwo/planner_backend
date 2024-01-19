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
      "tasks",
      [
        {
          name: "Complete 4 hours of running",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-07",
          goalId: 1,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Complete 4 hours of Cycling",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-07",
          goalId: 1,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Set up tables in MariaDB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-07",
          goalId: 2,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Seed the tables with fake data",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-14",
          goalId: 2,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Select Project Topic",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-02-01",
          end_date: "2024-02-07",
          goalId: 3,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Prepare project plan",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-02-08",
          end_date: "2024-02-21",
          goalId: 3,
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Identify year and model of car",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-04-15",
          goalId: 4,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Save up 5000 CAD deposit",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-05-15",
          goalId: 4,
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Calculate number of days in Canada",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-15",
          goalId: 5,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Complete application form",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-01-01",
          end_date: "2024-01-30",
          goalId: 5,
          status: "Not Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Decide on tables to be created",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-04-15",
          goalId: 6,
          status: "Done",
          createdAt: "2023-12-29",
          updatedAt: "2023-12-30",
        },
        {
          name: "Set up the tables in MariaDB",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          start_date: "2024-04-01",
          end_date: "2024-04-30",
          goalId: 6,
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
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
