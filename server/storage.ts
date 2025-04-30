import { 
  users, 
  contacts, 
  type User, 
  type InsertUser, 
  type Contact, 
  type InsertContact 
} from "@shared/schema";
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Pool } from 'pg';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  getAllContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class PostgresStorage implements IStorage {
  private db;
  private pool;

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    this.pool = pool;
    this.db = drizzle(pool);
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async getContact(id: number): Promise<Contact | undefined> {
    const result = await this.db.select().from(contacts).where(eq(contacts.id, id));
    return result[0];
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await this.db.insert(contacts).values(contact).returning();
    return result[0];
  }

  // Method to close database connection
  async close() {
    await this.pool.end();
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

// Choose which storage to use based on environment
const isProduction = process.env.NODE_ENV === 'production';
const usePostgres = isProduction || process.env.USE_POSTGRES === 'true';

export const storage = usePostgres 
  ? new PostgresStorage() 
  : new MemStorage();
