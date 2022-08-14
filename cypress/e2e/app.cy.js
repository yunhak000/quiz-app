/// <reference types="cypress" />

describe("App Component", () => {
  it("start 페이지가 잘 떠있습니까?", () => {
    cy.visit("http://localhost:3000/");
    cy.get("span").should("have.text", "Start !");
  });

  it("quiz 페이지로 잘 이동이 되나요?", () => {
    cy.wait(500);

    cy.get("span").click();

    cy.url().should("include", "/quiz");
  });

  it("quiz풀이가 잘 진행되나요?", () => {
    cy.wait(500);

    for (let i = 0; i < 10; i++) {
      cy.wait(500);
      cy.get("#1").click();
      cy.wait(500);
      cy.get("button").click();
    }
  });

  it("결과 페이지로 이동이 되나요?", () => {
    cy.wait(500);

    cy.url().should("include", "/report");
  });

  it("오답노트 페이지로 이동이 되나요?", () => {
    cy.wait(500);

    cy.get(".wrong-answer-note-link").click();

    cy.url().should("include", "/wrongAnswerNote");
  });

  it("결과로 돌아가기버튼이 잘 작동되나요?", () => {
    cy.wait(500);

    cy.get(".return-report-link").click();

    cy.wait(500);

    cy.url().should("include", "/report");
  });

  it("404페이지가 잘 뜨나요?", () => {
    cy.wait(500);

    cy.visit("http://localhost:3000/asdf");

    cy.wait(500);

    cy.get("p").should("have.text", "페이지를 찾을 수 없습니다.");
  });

  it("404페이지가 잘 뜨나요?", () => {
    cy.wait(500);

    cy.get("a").click();

    cy.wait(500);

    cy.url().should("include", "/");
  });
});
