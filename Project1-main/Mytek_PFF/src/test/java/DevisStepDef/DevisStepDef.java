package DevisStepDef;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import DevisPage.DevisPage;
import LoginPage.LoginPage;
import RechercherPage.RechercherPage;
import TestBase.TestBase;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DevisStepDef extends TestBase {
	LoginPage Login = new LoginPage();
	RechercherPage Recherche = new RechercherPage();
	DevisPage devis = new DevisPage();
	@BeforeMethod
	@Given("^Je suis connecte a mon compte avec mon (.*) et mon (.*)$")
	public void je_suis_connecte_a_mon_compte(String mail, String password) {
		intialization();
		Login.GotoConnexionPage();
		Login.Login_information(mail,password);
		Login.Connect_To_My_Account();
		Login.Verif_Cnx();
	}
	@Test
	@When("Selectionner un article en utilisant un (.*)$")
	public void rechercher_un_article_en_tapant_un_param_tre(String parameter) throws InterruptedException {
		
		Recherche.Boxsearch();
		Recherche.AddSearchParameter(parameter);
		Recherche.SelectElement();	
	}
	@Test
	@When("Je demande un devis")
	public void je_demande_un_devis() throws InterruptedException {
		devis.AddToQuote();
		devis.GotoDevisPage();
		devis.VerifyQuotePage();
		devis.GenerateQuote();
	}
	@Test
	@Then("Le devis doit etre genere")
	public void le_devis_doit_etre_genere() throws InterruptedException {
		devis.verifyGeneration();
	}
	@Test
	@When("ajouter cet article au devis")
	public void ajouter_cet_article_au_devis() throws InterruptedException {
		devis.AddToQuote();
	}
	@Test
	@When("je genere le devis")
	public void je_genere_le_devis() throws InterruptedException {
		devis.GotoDevisPage();
		devis.VerifyQuotePageManyElements();
		devis.GenerateQuote();
	}
	@Test
	@When("Je vide le devis")
	public void je_vide_le_devis() throws InterruptedException {
		devis.Empty();
	}
	@Test 
	@When("je demande le devis")
	public void je_demande_le_devis() throws InterruptedException {
		devis.GotoDevisPage();
		devis.Demander_DevisDeux();
		devis.GenerateQuote();
	}
}
