import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerComponent  } from 'jqwidgets-ng/jqxscheduler';

@Component({
  selector: 'app-calendar',
  template: `<jqxScheduler #schedulerReference
  [date]="date" [width]="800" [height]="600" [source]="dataAdapter" [showLegend]="true" [view]="'monthView'"
  [appointmentDataFields]="appointmentDataFields" [resources]="resources" [views]="views" [auto-create]="false" >
</jqxScheduler>`,
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

 
  @ViewChild("schedulerReference") scheduler: jqxSchedulerComponent;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.scheduler.createComponent(this.schedulerSettings);
  }

  generateAppointments(): any
  {
      let appointments = new Array();

      let appointment1 = {
          id: "id1", description: "George brings projector for presentations.", location: "", subject: "Quarterly Project Review Meeting", calendar: "Room 1",
          start: new Date(),
          end: new Date(2016, 10, 23, 16, 0, 0)
      };
      let appointment2 = {
          id: "id2", description: "",
          location: "", subject: "Chucha Prez", calendar: "Room 2",
          start: new Date(2016, 10, 24, 10, 0, 0),
          end: new Date(2016, 10, 24, 15, 0, 0)
      };

      appointments.push(appointment1);
      appointments.push(appointment2);

      return appointments;
  }

  source: any =
  {
      dataType: "array",
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'subject', type: 'string' },
          { name: 'calendar', type: 'string' },
          { name: 'start', type: 'date' },
          { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: this.generateAppointments()
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date(2016, 11, 23);

  appointmentDataFields: any =
  {
      from: "start",
      to: "end",
      id: "id",
      description: "description",
      subject: "subject",
      resourceId: "calendar"
  };

  resources: any =
  {
      colorScheme: "scheme05",
      dataField: "calendar",
      source: new jqx.dataAdapter(this.source)
  };

  views: string[] =

  [
      'weekView',
      'monthView'
  ]; 


  schedulerSettings: jqwidgets.SchedulerOptions =
  {
      date: new jqx.date(2016, 11, 23),
      width: 800,
      height: 600,
      source: this.dataAdapter,
      view: "monthView",
      showLegend: true,
      appointmentDataFields:
      {
          from: "start",
          to: "end",
          id: "id",
          description: "description",

          subject: "subject",
          resourceId: "calendar",
      },
      resources:
      {
          colorScheme: "scheme05",
          dataField: "calendar",
          source: new jqx.dataAdapter(this.source)
      },
      views:
      [
          "dayView",
          "weekView",
          "monthView"
      ]
  };

}
