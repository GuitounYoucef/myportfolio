import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectClass } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//************************************************************************************************************************************** */  
//*******************************************              Skiills             ********************************************************** */
//************************************************************************************************************************************** */  
  Desktopskills = [
    {
      technologieName: 'C language',
      years: 3,
      imageLink: 'assets/images/c-programming.png',
      comment:'Operating systeme(Linux): kernel, process management, memory management,video memory, device drivers',
      class:'none',
      color:'bluec'
    },
    {
      technologieName: 'Pascal language',
      years: 3,
      imageLink: 'assets/images/turbo-pascal.png',
      comment:'First programing laguage: Turbo Pascal 6.0 , arrays(1d,2d), pointers, lists, files, assembly language, mouse driver, graphics mode',
      class:'none',
      color:'bluepascal'
    } ,
     {
      technologieName: 'C++',
      years: 6,
      imageLink: 'assets/images/C++icon.png',
      comment:'Desktop application with Embarcadero Rad Studio: UI design and programing (DevExpress), FireDAC , Reporting(Fast-report VCL)',
      class:'none',
      color:'redrad'
    },
    {
      technologieName: 'Delphi',
      years: 6,
      imageLink: 'assets/images/delphi-icon.png',
      comment:'Desktop application with Embarcadero Rad Studio: UI design and programing (DevExpress), FireDAC , Reporting(Fast-report VCL)',
      class:'none',
      color:'redrad'
    },
    {
      technologieName: 'Electron JS',
      years: 1,
      imageLink: 'assets/images/ElectronJS.png',
      comment:'Desktop applications',
      class:'none',
      color:'gray'
    },
  ];
  
    ///-----------------------------------------------------------------------------------------------------------
    Webskills = [
      {
        technologieName: 'Angular',
        years: 2,
        imageLink: 'assets/images/',
        comment:'Front-End Web application , desktop application with ElectronJS',
        class:'fa-angular',
        color:'redrad'
      },
      {
        technologieName: 'JavaEE',
        years: 3,
        imageLink: 'assets/images/',
        comment:'Fullstack web applications: JSP, JSTL, Servelet, Tomcat, Javabean, MVC, JDBC, Jersey Framework, Restful web services',
        class:'fa-java',
        color:'blue'
      },
      {
        technologieName: 'Java Spring-boot',
        years: 2,
        imageLink: 'assets/images/springboot.png',
        comment:'Back-End web applications: Rest API, Java Persistence API',
        class:'none',
        color:'green'
      }
      ,
      {
        technologieName: 'PHP',
        years: 1,
        imageLink: 'assets/images/php.png',
        comment:'first back-end language',
        class:'none',
        color:'purple'
      },
      {
        technologieName: 'Ckeditor',
        years: 1,
        imageLink: 'assets/images/ckeditor.png',
        comment:'Front-End Web application, Create and Edit a Posts',
        class:'none',
        color:'green'
      },
      {
        technologieName: 'Java Srcipt',
        years: 4,
        imageLink: 'assets/images/',
        comment:'Front-End Web application: JQuery, AJAX',
        class:'fa-js-square',
        color:'gold'
      },
      {
        technologieName: 'HTML',
        years: 4,
        imageLink: 'assets/images/',
        comment:'Front-End Web application',
        class:'fa-html5',
        color:'orange'
      },
      {
        technologieName: 'CSS',
        years: 4,
        imageLink: 'assets/images/',
        comment:'Front-End Web application',
        class:'fa-css3-alt',
        color:'blue'
      },
 
      {
        technologieName: 'Bootstrap',
        years: 3,
        imageLink: 'assets/images/turbo-pascal.png',
        comment:'Front-End Web application',
        class:'fa-bootstrap',
        color:'purple'
      },
      {
        technologieName: 'Material Design for Bootstrap',
        years: 1,
        imageLink: 'assets/images/mdb-angular.png',
        comment:'Front-End Web application',
        class:'none',
        color:'blue'
      },
   
    ];
  
    ///-----------------------------------------------------------------------------------------------------------
    Databaseskills = [
      {
        technologieName: 'MS SQL Server',
        years: 7,
        imageLink: 'assets/images/msSql.png',
        comment:'database of desktop applications',
        class:'none',
        color:'gray'
      },
      {
        technologieName: 'MySql',
        years: 4,
        imageLink: 'assets/images/mysql_PNG36.png',
        comment:'database of web applications',
        class:'none',
        color:'grayblue'
      },
    ]

//************************************************************************************************************************************** */  
//*******************************************             Projects            ********************************************************** */
//************************************************************************************************************************************** */   
Projects = [
  {
    id:0,
    type:'desktop',
    Name: 'Stock management application',
    company:'material service - Municipality of Sidi Khaled - Biskra',
    period: '2018',
    Effort: '2 years with improvements to date',
    Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'Delphi', 'Fast Report VCL 5','DevExpress'],
    imageLink: ['assets/images/projects/stocke/0.JPG',
               'assets/images/projects/stocke/1.JPG',
               'assets/images/projects/stocke/2.JPG',
               'assets/images/projects/stocke/3.JPG',
               'assets/images/projects/stocke/5.JPG',
               'assets/images/projects/stocke/6.JPG',
               'assets/images/projects/stocke/7.JPG',
               'assets/images/projects/stocke/8.JPG',
               'assets/images/projects/stocke/9.JPG',
               'assets/images/projects/stocke/10.JPG',
               'assets/images/projects/stocke/11.JPG',
               'assets/images/projects/stocke/12.JPG',
               'assets/images/projects/stocke/13.JPG',
               'assets/images/projects/stocke/14.JPG',
               'assets/images/projects/stocke/15.JPG',
               'assets/images/projects/stocke/16.JPG',
               'assets/images/projects/stocke/17.JPG',
               'assets/images/projects/stocke/18.JPG', 
               'assets/images/projects/stocke/19.JPG',],
               
    description: 'this application allows entry and control of all operations carried out on the stock of products, such as invoicing, delivery of products, stock cards, use of the barcode reader and configuration of the printer dedicated to printing tickets and codes bars I have personalized this application for the management of the stock of different points of sale ',
    link:'none',
  },
  {
    id:1,
    type:'desktop',
    Name: 'Revision of the electoral list',
    company:'material service - Municipality of Sidi Khaled - Biskra',
    period: '2016',
    Effort: '6 months with improvements to date',
    Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'C++ Builder', 'Fast Report VCL 5','DevExpress'],
    imageLink: ['assets/images/projects/election/0.JPG',
                'assets/images/projects/election/1.JPG',
                'assets/images/projects/election/2.JPG',
                'assets/images/projects/election/3.JPG',
                'assets/images/projects/election/4.JPG',
                'assets/images/projects/election/5.JPG',  ],
    description: 'manage the list of electors (registration, transfer, expulsion) using the civil status database',
    link:'none',
  },
  {
    id:2,
    type:'desktop',
    Name: 'Digitalization of vehicle sales contract',
    company:'material service - Municipality of Sidi Khaled - Biskra',
    period: '2016',
    Effort: '3 months with improvements to date',
    Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'C++ Builder', 'Fast Report VCL 5','DevExpress'],
    imageLink: ['assets/images/projects/auto/0.PNG',
    'assets/images/projects/auto/1.PNG',
    'assets/images/projects/auto/2.PNG',
    'assets/images/projects/auto/3.JPG',
    'assets/images/projects/auto/4.JPG',
    'assets/images/projects/auto/5.JPG', 
    'assets/images/projects/auto/6.JPG',  ],
    description: 'Digitize and manage (create, read, update, delete, print reports) vehicle sales contracts',
    link:'none',
  },
  {
    id:3,
    type:'desktop',
    Name: 'Expert system - civil status',
    company:'material service - Municipality of Sidi Khaled - Biskra',
    period: '2015',
    Effort: '6 months with improvements to date',
    Technological:['Windows Server', 'Windows 7', 'MS Sql-server','Rad Studio 10.2', 'Delphi', 'Fast Report VCL 5','DevExpress'],
    imageLink: ['assets/images/projects/sexp/0.PNG',
    'assets/images/projects/sexp/1.JPG',
    'assets/images/projects/sexp/2.JPG',
    'assets/images/projects/sexp/3.JPG',
    'assets/images/projects/sexp/4.JPG',
    'assets/images/projects/sexp/5.JPG',
    'assets/images/projects/sexp/6.JPG',
    'assets/images/projects/sexp/7.JPG',
    'assets/images/projects/sexp/8.JPG',
    'assets/images/projects/sexp/9.JPG',
    'assets/images/projects/sexp/10.JPG',
    'assets/images/projects/sexp/11.JPG',
    'assets/images/projects/sexp/12.JPG',
    'assets/images/projects/sexp/13.JPG',
    'assets/images/projects/sexp/14.JPG',
    'assets/images/projects/sexp/15.PNG',
    'assets/images/projects/sexp/16.PNG',
    'assets/images/projects/sexp/17.JPG', 
    'assets/images/projects/sexp/18.JPG', 
    'assets/images/projects/sexp/19.JPG', 
    'assets/images/projects/sexp/20.JPG', 
    'assets/images/projects/sexp/21.JPG', 
    'assets/images/projects/sexp/22.JPG',   ],
    description: 'Implementation of an expert system (rule base + fact base) which automatically translates the fields of Civil Status databases (birth, marriage, death) from Arabic to French. ',
    link:'none',
  }, 
  
  {
    id:4,
    type:'desktop',
    Name: 'implementation of protocol RFB',
    company:'final project of engineer degree',
    period: '2010',
    Effort: '6 months',
    Technological:['Linux Debian 5.0.0',  'C language', 'C++ ', 'Qt3','linux configure kernel','linux compiling kernel','distributed applications'],
    imageLink: ['assets/images/projects/rfb/0.png',
    'assets/images/projects/rfb/1.JPG',
    'assets/images/projects/rfb/2.JPG',
    'assets/images/projects/rfb/3.JPG',
    'assets/images/projects/rfb/4.JPG',
    'assets/images/projects/rfb/5.jpg', 
    'assets/images/projects/rfb/6.JPG',
    'assets/images/projects/rfb/7.JPG', 
    'assets/images/projects/rfb/8.JPG', 
    'assets/images/projects/rfb/9.JPG', 
    'assets/images/projects/rfb/10.JPG', 
    'assets/images/projects/rfb/11.JPG', 
    'assets/images/projects/rfb/12.JPG',   ],
    description: 'This application is built around a protocol called remote frame buffer (RFB). To access to the remote machine with this protocol, all you have to do is enter the IP address of this machine and his screen will be displayed on your machine. Once the display is established, we can operate the remote machine using the keyboard and mouse.',
    link:'none',
  }, 



];

WebProject=[
  {
    id:5,
    type:'web',
    Name: 'Blog Post (Ckeditor5)',
    company:'personal work',
    period: '2020',
    Effort: '1 months with improvements to date',
    Technological:['Mysql','Angular', 'Java Spring boot','Java Spring Security', 'Html','Css','Ckeditor5','Typescript','Bootstrap'],
    imageLink: ['assets/images/projects/blog/0.JPG',
    'assets/images/projects/blog/1.JPG',
    'assets/images/projects/blog/2.JPG',
    'assets/images/projects/blog/3.JPG',
    'assets/images/projects/blog/4.JPG',
    'assets/images/projects/blog/5.JPG',
    'assets/images/projects/blog/6.JPG', 
    'assets/images/projects/blog/7.JPG', 
    'assets/images/projects/blog/8.JPG', 
    'assets/images/projects/blog/9.JPG', 
    'assets/images/projects/blog/10.JPG', 
    'assets/images/projects/blog/11.JPG', 
    'assets/images/projects/blog/12.JPG',
    'assets/images/projects/blog/13.JPG', 
    'assets/images/projects/blog/14.JPG',    ],
    description: 'fullstack bolg post with angular, ckeditor in front-end and spring boot api in back-end',
    link:'https://github.com/GuitounYoucef/AngularSrpingBootBlog',  
  },
]

//******************************************************************************************* */
  projectdetailName:string;
  constructor() { }
  getDesktpSkills():any
  {
   return this.Desktopskills;
  } 
  getWebSkills():any
  {
   return this.Webskills;
  }
  getDatabaseSkills():any
  {
    return this.Databaseskills;
  }

  getProjects():any
  {
    return this.Projects;
  }
  getWebProjects():any
  {
    return this.WebProject;
  }
  getPojectByName(id:number): any{
    
    if (this.Projects.find(p => p.id===id))
    return this.Projects.find(p => p.id===id);  
    else return this.WebProject.find(p => p.id===id);  
  }

}
