import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IcoService } from '../ico.service';

@Component({
  selector: 'app-icocreate',
  templateUrl: './icocreate.component.html',
  styleUrls: ['./icocreate.component.css']
})
export class IcocreateComponent implements OnInit {
  get icoData(): { id: number; companyName: string; companyDescription: string; companyLogoUrl: string; tokenName: string; overallScore: number; icoStatus: string; icoStartDate: string; icoEndDate: string; whitelistStartDate: string; whitelistEndDate: string; tokenSaleScore: number; telegramUrl: string; mediumFollowers: number; twitterFollowers: number; facebookFollowers: number; telegramFollowers: number; productPotential: number; productExisting: number; productScore: number; peopleTeam: number; peopleAdvisors: number; financialsTokenEth: number; financialsUsdToken: number; financialsCircSupplyEth: number; financialsCircSupplyTokens: number; financialsHardCap: number; financialsSupplyIco: number; financialsSupplyPresale: number; financialsSupplyDiscount: number; externalPartners: number; externalInfuencers: number; externalVcFirms: number } {
    return this._icoData;
  }

  set icoData(value: { id: number; companyName: string; companyDescription: string; companyLogoUrl: string; tokenName: string; overallScore: number; icoStatus: string; icoStartDate: string; icoEndDate: string; whitelistStartDate: string; whitelistEndDate: string; tokenSaleScore: number; telegramUrl: string; mediumFollowers: number; twitterFollowers: number; facebookFollowers: number; telegramFollowers: number; productPotential: number; productExisting: number; productScore: number; peopleTeam: number; peopleAdvisors: number; financialsTokenEth: number; financialsUsdToken: number; financialsCircSupplyEth: number; financialsCircSupplyTokens: number; financialsHardCap: number; financialsSupplyIco: number; financialsSupplyPresale: number; financialsSupplyDiscount: number; externalPartners: number; externalInfuencers: number; externalVcFirms: number }) {
    this._icoData = value;
  }
  icoStored: number
  private _icoData = {
    id: 0,
    companyName: '',
    companyDescription: '',
    companyLogoUrl: '',
    // icoDate: new Date(),
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
    externalVcFirms: 0

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

    localStorage.setItem('icolist' + ico.id, JSON.stringify(ico))
    localStorage.setItem('icoStored', this.icoStored)
  }

}
