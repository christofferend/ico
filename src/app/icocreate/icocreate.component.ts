import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IcoService } from '../ico.service';

@Component({
  selector: 'app-icocreate',
  templateUrl: './icocreate.component.html',
  styleUrls: ['./icocreate.component.css']
})
export class IcocreateComponent implements OnInit {
  icoStored: number

  company = {
    name: '',
    logoUrl: '',
    description: ''
  }

  followers = {
    twitter: 0,
    facebook: 0,
    medium: 0,
    telegram: 0,
  }

  icoData = {
    id: 0,
    company: this.company,
    followers: this.followers,




/*    // icoDate: new Date(),
    // hardCap: 0,
    // created: new Date()
    tokenName: '',
    overallScore: 0,
    icoStatus: '',
    // icoStartDays: Date(),
    icoStartDate: Date(),
    icoEndDate: Date(),
    // whitelistStartDays: Date(),
    whitelistStartDate: Date(),
    whitelistEndDate: Date(),
    tokenSaleScore: 0,
    telegramUrl: '',
    mediumFollowers: 0,
    twitterFollowers: 0,
    facebookFollowers: 0,
    telegramFollowers: 0,
    productPotential: 0,
    productExisting: 0,
    productScore: 0,
    peopleTeam: 0,
    peopleAdvisors: 0,
    financialsTokenEth: 0,
    financialsUsdToken: 0,
    financialsCircSupplyEth: 0,
    financialsCircSupplyTokens: 0,
    financialsHardCap: 0,
    financialsSupplyIco: 0,
    financialsSupplyPresale: 0,
    financialsSupplyDiscount: 0,
    externalPartners: 0,
    externalInfuencers: 0,
    externalVcFirms: 0*/

  }

  constructor(
    icoService: IcoService
  ) { }

  ngOnInit() {
    this.icoStored = JSON.parse(localStorage.getItem('icoStored')) || 0
  }

  createNew(ico) {
    // console.log(this.icoStored)
    this.icoStored = this.icoStored + 1
    ico.id = this.icoStored
    // console.log("craeteNew called with argument", ico);

    localStorage.setItem('icolist' + ico.id, JSON.stringify(ico));
    localStorage.setItem('icoStored', this.icoStored.toString());
  }

}
