import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';
import {Subscription} from 'rxjs';
import {IOptionAnswersMap} from '../../../models/option-answers.model';
import {AppState} from '../../../store/app.state';
import * as elements from '../../../store/elements/elements.actions';

@Component({
  selector: 'sb-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, OnDestroy {
  @Input() data: any;
  optionAnswers: IOptionAnswersMap;
  optionAnswersSub: Subscription;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.optionAnswersSub = this.store.pipe(select(fromRoot.getOptionAnswers, { elementId: this.data.element.id })).subscribe(res => {
      this.optionAnswers = res;
    });
  }

  ngOnDestroy() {
    this.optionAnswersSub.unsubscribe();
  }

  handleChange(answer, pageFlow) {
    this.store.dispatch(new elements.UpdateQuestionAnswerAction({
      pageId: this.data.element.pageId,
      elementId: this.data.element.id,
      answer,
      pageFlowModifier: this.data.element.question.pageFlowModifier,
      pageFlow,
      surveyId: this.data.surveyId,
    }));
  }

  trackElement(index: number, element: any) {
    return element ? element.key : null;
  }
}