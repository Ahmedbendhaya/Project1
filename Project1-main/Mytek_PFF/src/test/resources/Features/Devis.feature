Feature: Devis

  @Devis1
  Scenario Outline: Demander un devis d un article
    Given Je suis connecte a mon compte avec mon <mail> et mon <password>
    When Selectionner un article en utilisant un <parametre>
    And Je demande un devis
    Then Le devis doit etre genere

    Examples: 
      | mail                                    | password  | parametre       |
      | Ben.dhaya.ahmed.baha.eddine@hotmail.com | 22080023A | Asus ChromeBook |

  @Devis2
  Scenario Outline: Demander un devis de plusieurs articles
    Given Je suis connecte a mon compte avec mon <mail> et mon <password>
    When Selectionner un article en utilisant un <parametre>
    And ajouter cet article au devis
    And Selectionner un article en utilisant un <parametre1>
    And ajouter cet article au devis
    And Selectionner un article en utilisant un <parametre2>
    And ajouter cet article au devis
    And je genere le devis
    Then Le devis doit etre genere

    Examples: 
      | mail                                    | password  | parametre | parametre1                                                                   | parametre2                            |
      | Ben.dhaya.ahmed.baha.eddine@hotmail.com | 22080023A | Asus      | PC PORTABLE LENOVO IDEAPAD 1 11IGL05 N4020 4GO 128GO SSD - GRIS (81VT0058FG) | SMARTPHONE XIAOMI REDMI 9A 32G - BLEU |

  @Devis3
  Scenario Outline: Demander un devis apres le vidage du devis
    Given Je suis connecte a mon compte avec mon <mail> et mon <password>
    When Selectionner un article en utilisant un <parametre>
    And ajouter cet article au devis
    And Je vide le devis
    And Selectionner un article en utilisant un <parametre1>
    And ajouter cet article au devis
    And Selectionner un article en utilisant un <parametre2>
    And ajouter cet article au devis
    And je demande le devis
    Then Le devis doit etre genere

    Examples: 
      | mail                                    | password  | parametre | parametre1                                                                   | parametre2                            |
      | Ben.dhaya.ahmed.baha.eddine@hotmail.com | 22080023A | Asus      | PC PORTABLE LENOVO IDEAPAD 1 11IGL05 N4020 4GO 128GO SSD - GRIS (81VT0058FG) | SMARTPHONE XIAOMI REDMI 9A 32G - BLEU |
