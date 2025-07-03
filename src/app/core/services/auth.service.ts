import { Injectable } from '@angular/core';
import { AuthSession, User } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  constructor(private supabase: SupabaseService) {
    this.init();
  }

  async init() {
    this.loadingSubject.next(true);

    const { data } = await this.supabase.client.auth.getUser();
    this.userSubject.next(data.user);

    this.onAuthStateChanged((user: User | null) => {
      this.userSubject.next(user);
      this.loadingSubject.next(false);
      this.isAuthenticatedSubject.next(!!user);
    });

    this.loadingSubject.next(false);
  }

  onAuthStateChanged(callback: (user: User | null) => void) {
    return this.supabase.client.auth.onAuthStateChange((_event, session) => {
      callback(session?.user ?? null);
    });
  }

  async getSession(): Promise<AuthSession | null> {
    const { data } = await this.supabase.client.auth.getSession();
    return data.session;
  }

  signIn(email: string, password: string) {
    return this.supabase.client.auth.signInWithPassword({ email, password });
  }

  signOut() {
    return this.supabase.client.auth.signOut();
  }
}
